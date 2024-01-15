export const loadingVariants = {
    initial: {
        scale: 1.2,
    },
    animate: {
        scale: 1,
        transition: {
            delay: 0.2,
            duration: 1,
            stiffness: 100,
            damping: 10,
        }
    },
};


export const loadingText = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 1, 
        transition: {
            delay: .5,
            type: "spring",
            stiffness: 300,
            damping: 10,
        }
    },
};


export const mobileNav = {
    hidden: {
		height: 0,
		opacity: 0.4,
	},
	show: {
		height: '100vh',
		opacity: 1,
		transition: {
			when: 'beforeChildren',
		},
	},
	transition: {
		duration: 0.6,
		when: 'beforeChildren',
	},
	exit: {
		opacity: 0,
		height: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: .5,
		},
	},
};


export const mobileMenuLink = (showDelay, delay, exitDelay) => ({
	hidden: {
		y: 80,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: showDelay,
		},
	},
	transition: {
		delay: delay,
	},
	exit: {
		opacity: 0,
		y: 80,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: exitDelay,
		},
	},
});


export const resumeButton = {
	initial: {
		opacity:0,
		y: 30
	},
	animate: {
		opacity: 1,
		y:1,
		transition: {
			delay: 3.6,
			duration: 1
		}
	},
};


export const socialIcon = {
	initial: {
		opacity: 0,
		y:30,
	},
	animate: {
		opacity: 1,
		y:1,
		transition: {
			delay: 3.9,
			duration: 1
		}
	}
};


export const arrowDown = {
	initial: {
		opacity: 0,
		y: 1
	},
	animate: {
		opacity: 1,
		y: 40,
		transition: {
			delay: 5,
			duration: 1.5,
			repeat: Infinity,
			repeatType: "mirror"
		}
	},
};

export const arrowAnimate = {
	initial: {
		y: -20
	},
	animate: {
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
			repeatType: "mirror",
		}
		
	}
}

export const upShow = {
	initial: {
		opacity: 0,
		y: 200
	},
	animate: {
		opacity: 1,
		y:0,
		transition: {
			type: "spring",
			stiffness: 60,
			damping: 20
		}
	}
};

export const parentShow = {
	initial: {
		opacity: 0,
		y: 200
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			staggerChildren: 0.2
		}
	},
}
